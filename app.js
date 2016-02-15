angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;
        todoList.todos = [
            
            {title:'Learn Angular', description:'W3 Schools Bruh', duedate: '02/14/2016', done:true}, 
             {title:'Graduate', description:'Lesgooo', duedate: '05/16/2017', done:false},
            {title:'Assemble the Avengers', description:'Assemble!', duedate: '05/01/2015', done:true}
        ];

        todoList.addTodo = function () {

            if (todoList.checkDateFormat()) {

                todoList.todos.push({
                    title: todoList.todoTitle,
                    description: todoList.todoDescription,
                    duedate: todoList.todoDate,
                    done: false
                });

                todoList.todoTitle = '';
                todoList.todoDescription = '';
                todoList.todoDate = '';
            }
        };

        todoList.remaining = function () {
            var count = 0;
            angular.forEach(todoList.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function () {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };

        todoList.checkDateFormat = function () {

            var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

            if (!todoList.todoDate.match(dateRegex)) {
                window.alert("Yer date's wrong! Do it (dd/mm/yyyy) between 1900-2099");
            } else

                return true;
        };
        
        todoList.orderByDate = function(){
            this.todoDate
            todoList.todos = orderBy(todoList.todos, new Date('duedate'));
        };
        
         todoList.orderByTitle = function(){
            
            todoList.todos = orderBy(todoList.todos, 'title');
        };
    
    /*Implementation found http://fdietz.github.io/recipes-with-angular-js/common-user-interface-patterns/filtering-and-sorting-a-list.html*/
     
    todoList.filterFunction = function(element) {
        return element.name.match(/^Ma/) ? true : false;};
    });

