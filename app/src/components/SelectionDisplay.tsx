import { Section } from "@scripts/soc";
import SectionDisplay from "@components/SectionDisplay";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Droppable } from "react-drag-and-drop";
import { Selection } from "@scripts/scheduleGenerator";
import { GrClose } from "react-icons/gr";
import { storeHoveredElementCourse, forgetHoveredElementCourse } from '../reducers/hoverInfoSlice.tsx'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
    ind: number;
    selection: Selection;
    handleDrop: (ind: number, uid: string) => Promise<void>;
    handleRemove: (sectionToRemove: Section) => void;
    handleDeleteSelection: (ind: number) => void;
}

// TODO: FIX TYPE
const dispatch = useDispatch<any>();

const dispatchStoreCourse = (uid: string) => {
    dispatch(storeHoveredElementCourse(uid));
}

const dispatchForgetCourse = () => {
    dispatch(forgetHoveredElementCourse());
}


type State = {
    hoverInfo: {
      hoveredElementSectionUid: string | null,
      hoveredElementCourseId: string | null,
    }
};

const hoveredElementSectionUid = useSelector((state : State) => state.hoverInfo.hoveredElementSectionUid)
const hoveredElementCourseId = useSelector((state : State) => state.hoverInfo.hoveredElementCourseId)

export default function SelectionDisplay(props: Props) {
    const doDrop = ({ uid }: { uid: string }) => {
        props.handleDrop(props.ind, uid).then();
    };

    const sectionDisplays = props.selection.map((section: Section, idx) => (
        <SectionDisplay
            draggable={false}
            key={idx}
            section={section}
            handleRemove={props.handleRemove}
            hoveredElementSectionUid={hoveredElementSectionUid}
            hoveredElementCourseId={hoveredElementCourseId}
            storeHoveredElementSection={(_uid: string | null): void => {}}
            forgetHoveredElementSection={(): void => {}}
            storeHoveredElementCourse={dispatchStoreCourse}
            forgetHoveredElementCourse={dispatchForgetCourse}
        />
    ));

    return (
        <div>
            <Droppable types={["uid"]} onDrop={doDrop}>
                <div className="p-2 mx-1 mb-2 rounded-lg shadow-sm shadow-slate-400">
                    <div className={"flex justify-between"}>
                        <u>Course {props.ind + 1}</u>
                        <button
                            className={"mx-1"}
                            onClick={() =>
                                props.handleDeleteSelection(props.ind)
                            }
                        >
                            <GrClose />
                        </button>
                    </div>

                    <div>{sectionDisplays}</div>
                </div>
            </Droppable>
        </div>
    );
}
