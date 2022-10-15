import {useState} from 'react'

const AddTask = ({ onAdd }) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task');
            return;
        }

        onAdd({text, day, reminder})

        setText('');setDay('');setReminder(false);
    }

    return (
        <div className="flex flex-col bg-slate-100 py-2">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className=" p-12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-slate-800"> Add new task </h2>

                    <form className="mt-10" onSubmit={onSubmit}>
                        <label htmlFor="task" className="block text-xs font-semibold text-slate-600 uppercase">Text</label>
                        <input id="task" type="text" name="task" placeholder="Add task"
                               value={text} onChange={(e) => setText(e.target.value)}
                               className="block w-full py-3 px-1 mt-2
                    text-slate-800 appearance-none border-b-2 border-slate-100
                    focus:text-slate-500 focus:outline-none focus:border-slate-200"/>

                        <label htmlFor="time" className="block mt-2 text-xs font-semibold text-slate-600 uppercase">Day/Time</label>
                        <input id="time" type="text" name="time" placeholder="Day/Time"
                               value={day} onChange={(e) => setDay(e.target.value)}
                               className="block w-full py-3 px-1 mt-2 mb-4
                    text-slate-800 appearance-none
                    border-b-2 border-slate-100
                    focus:text-slate-500 focus:outline-none focus:border-slate-200"
                        />

                        <label htmlFor="reminder" className="block mt-2 text-xs font-semibold text-slate-600 uppercase">Set reminder</label>
                        <input id="reminder" type="checkbox"
                               checked={ reminder }
                               value={ reminder } onChange={(e) => setReminder(e.currentTarget.checked)}/>

                        <input type="submit"
                               value=" Save task"
                               className="w-full py-3 mt-10 bg-slate-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-slate-700 hover:shadow-none cursor-pointer" />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTask