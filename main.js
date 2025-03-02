const userInput = document.getElementById('userInput');
const userOutput = document.getElementById('output');
let editingTask = null;

function submitBtn() {
    
    // Create new div element to wrap all the task element
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('my-[14px]', 'flex', 'items-center', 'justify-center');

    // taskContainer.classList.add('w-fit', 'mx-auto');

    // Prevents empty input
    if (userInput.value === '') {
        return;
    }
    
    if (editingTask) { // Checks if the task is being updated
        editingTask.innerText = userInput.value; // Updates the existing task
        editingTask = null; // Resets the editing mode
        userInput.value = ''; // Clears the input box after updating
        return; 
    }
    
    // Creates new Element for output container
    let checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox';
    checkbox.classList.add('w-5', 'h-5', 'accent-orange-600', 'bg-gray-100', 
        'border-gray-300', 'rounded-sm', 'focus:ring-orange-500', 'dark:focus:ring-orange-600',
        'dark:ring-offset-gray-800', 'focus:ring-2', 'dark:bg-gray-700', 'dark:border-gray-600'
    );

    checkbox.innerText = userInput.value;

    // Create a label Element next to checkbox
    let output = document.createElement('label');
    output.classList.add('font-display', 'ms-2', 'text-sm', 'font-medium', 'text-zinc-900');

    output.innerText = userInput.value;

    // Cross out when checkbox is enabled
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            output.style.textDecoration = 'line-through';
        }
        else {
            output.style.textDecoration = 'none';
        }
    });

    // Create update button
    let updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';
    updateBtn.classList.add('rounded-[3px]', 'border-green-200', 'text-slate-50', 'bg-green-400', 'py-[3px]', 'px-4');

    updateBtn.addEventListener('click', function () {

        // Moves the current text/task back to the user input
        userInput.value = output.innerText;

        // Stores the text/task inside the variable editingTask
        editingTask = output;
       
    });

    // Create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('rounded-[3px]', 'border-red-200', 'text-slate-50', 'bg-red-600', 'py-[3px]', 'px-4');

    deleteBtn.addEventListener('click', function () {
        taskContainer.remove(); 
    });

    // Wraps all task element inside taskContainer
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(output);
    taskContainer.appendChild(updateBtn);
    taskContainer.appendChild(deleteBtn);
    taskContainer.appendChild(
        document.createElement('br')
    );

    // Put taskContainer in the userOutput
    userOutput.appendChild(taskContainer);

    // Clears the user input after sending
    userInput.value = '';
}
