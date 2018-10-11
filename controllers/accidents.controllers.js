// router.get("/", function(req, res, next) {
//   req.query         // <-- get querystring values such as ?foo=bar
//   req.params        // <-- get path params such as the "34" in /posts/34/comments
//   req.body          // <-- get either the json that was posted, or the form values
//   res.render(...)   // <-- render a template
//   res.json(...)     // <-- render a JSON response
//}
// Controllers typically:
// Access data from the request
// Coordinate with other parts of the app (such as models, external services etc...)
// Instruct the framework
//on how to generate a response
//a function that gets a specific Accident
const getAccident = (request, response) => {
    console.log(request.params)
    const id = request.params.id
    response.send(`you are getting the ${id}`)
};
//function that gets a list of all Accident 
const fetchAccidents = (request, response) => { 
    response.send(`You are getting your accidents`);
};
//function that creates an accident report
const createAccident = (request, response) => {
    response.send(`You have created and accident report`)
};
//function that updates an accident report 
const updateAccident = ( request, response) => {
    response.send(`You have updated an accident report`)
};
//function that deletes an accident report
const deleteAccident = (request, response) => {
    response.send(`You have deleted an accident report`)
}
module.exports = {getAccident , fetchAccidents, createAccident, updateAccident, deleteAccident};