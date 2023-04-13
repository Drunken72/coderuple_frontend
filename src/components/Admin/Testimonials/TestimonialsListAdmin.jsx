import TailwindButton from '@/components/UI/Buttons/TailwindButton'
import ControlledSelectionGrid from '@/components/UI/DataTable/ControlledSelectionGrid'
import QuickFilteringInitialize from '@/components/UI/DataTable/QuickFilteringInitialize'

const TestimonialsListAdmin = (props) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between items-center">
                <span>Testimonials</span>
                {
                    props.selectedRows.length === 0 ?
                        <TailwindButton button_type="success" button_target={`${props.identifiers.add.id}`}>
                            + Add Testimonials
                        </TailwindButton>
                        :
                        <TailwindButton button_type="danger" button_target={`${props.identifiers.delete.id}`}>
                            - Delete Selected
                        </TailwindButton>
                }
            </div>
            <QuickFilteringInitialize identifiers={props.identifiers} setSelectedRows={props.setSelectedRows} />
        </div>
    )
}

export default TestimonialsListAdmin