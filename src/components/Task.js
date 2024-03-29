import {FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
    return (

            <div
                className={`max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto my-2 relative ${task.reminder ? 'border-green-300 border bg-green-100' : '' }`}
                 onDoubleClick={() => onToggle(task.id) }>
                <div className="py-4 px-8 mt-3">
                    <div className="flex flex-col mb-8">
                        <h2 className="text-slate-700 font-semibold text-2xl tracking-wide mb-2">{task.text}
                        <FaTimes
                            className="absolute right-1 top-1 text-red-500"
                            onClick={() => onDelete(task.id)} style={{cursor: 'pointer'}}/>
                        </h2>
                        <p className="text-slate-500 text-base">{task.reminder ? 'Reminder is on' : 'Reminder is off'}</p>
                    </div>
                    <div className="bg-slate-100 rounded-lg">
                        <div className="py-4 px-4">
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold mb-3">Notification</h4>
                                <div className="flex flex-col text-sm text-slate-500">
                                    {task.day}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Task;