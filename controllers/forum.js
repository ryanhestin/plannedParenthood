exports.index = function(req, res) {
  var user = {type: "staff"};
  var questions  =  [
    {
    "author": "",
    "_id": "q1",
    "text"  : "Question 1",
    "approved": true,
    "tags": [], 
    "answers": [ 
      { 
      "author": "",
      "_id": "q1a1",
      "text"  : "Answer 1 to Q1",
      "approved": true,
    }, 
    { 
      "author": "",
      "_id": "q1a2",
      "text"  : "Answer 2 to Q1",
      "approved": false,
    }, 
    { 
      "author": "",
      "_id": "q1a3",
      "text"  : "Answer 3 to Q1",
      "approved": true,
    }
    ]
  },
  { 
    "author": "",
    "_id": "q2",
    "text"  : "Question 2",
    "approved": true,
    "tags": [], 
    "answers": [] 
  }
  ];

  if (user.type === "staff"){
    res.render('forum-staff', {
      title: 'Forum', 
      questions: questions
    });
  }else{
    res.render('forum', {
      title: 'Forum', 
      questions: questions
    });
  }
};
