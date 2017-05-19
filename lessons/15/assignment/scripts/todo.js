// Only execute the code when the DOM has finished loading
$('document').ready(function() {
  // Listen for clicks on the add button
  $('#add-todo').click(function(){
    // Stop the form submission
    event.preventDefault();

    var newTodoItem = $('#new-todo');

    // Read value of new todo
    var newTodo = newTodoItem.val();

    // Clear value of previously entered todo
    newTodoItem.val('');

    console.log('New Todo is: ' + newTodo);

    // Create list item with todo value and append to the list
    // var newElement = '<li><label><input type="checkbox"><span>'+ newTodo + '</span></label></li>';
    // $('#todos').append(newElement);

    // Alternative approach using clone
    // 
    // Find and clone the HTML template already present on the page
    // `<li id="template"><label><input type="checkbox"><span>item 1</span></label></li>`
    var newElement = $('#template').clone();
    // Remove the template id
    newElement.attr('id','');
    // Find the span inside the new clone and replace the text with the new todo value
    // `<li id="template"><label><input type="checkbox"><span>{newTodo}</span></label></li>`
    newElement.find('span').text(newTodo);
    // Append the new element to the Todo list
    newElement.appendTo('#todos');
  })

  $('#clear').click(function() {
    event.preventDefault();
    $('#todos :checked').each(function(){
      $(this).closest('li').remove();
    });
  });

});