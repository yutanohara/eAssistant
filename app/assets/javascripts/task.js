function createTask(){
  $.ajax({
    type: "GET",
    url: "/tasks/new.js",
  }).done(function(){
    $(document).ready();
  });
};
