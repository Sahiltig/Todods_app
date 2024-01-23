Steps:

1.	The project basically consists of two components, Header.js and Body.js.
2.	Header component simply contains a heading with some css added to it. 
3.	Body component has a heading and a form.
4.	Now, whenever we want to have a form working (able to enter the text in the provided textbox) in react, we use controlled component method.
5.	Then in order to save the text (passing data from child component(user) to parent component) lifting state up concept in react is used.
6.	And in order to display the entered text, mapping function of an array using dynamic variable (useState hook) is used. 
7.	changefn and submitfn event handlers are used wherever we want to capture onChange and onSubmit events.
8.	Functionalities are included in order to delete and edit the entered texts by using onClick event in the respective buttons.
9.	Finally, css is given that makes the presentation quite attractive.



User-guide:

1.	Enter your task and click on ‘Add’ button. Your task gets added and you can see it with an option to ‘Delete’ and ‘Edit’ it as well.
2.	Try to edit your task. While editing you will get a prompt to edit your task.
3.	Try to delete your task. Task disappears if you click on ‘Delete’ button. 
4.	Additional step – Add a task without entering anything in the text area. You will get an alert message.
