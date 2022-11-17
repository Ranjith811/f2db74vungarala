var donut = require('../models/donut');
// List of all donuts
exports.donut_list = async function (req, res) {
    try {
        thedonuts = await donut.find();
        res.send(thedonuts);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific donut.
//exports.donut_detail = function (req, res) {
//   res.send('NOT IMPLEMENTED: donut detail: ' + req.params.id);
//};
// Handle donut create on POST.
//exports.donut_create_post = function (req, res) {
// res.send('NOT IMPLEMENTED: donut create POST');
//};
// Handle donut delete form on DELETE.
//exports.donut_delete = function (req, res) {
// res.send('NOT IMPLEMENTED: donut delete DELETE ' + req.params.id);
//};
// Handle donut update form on PUT.
//exports.donut_update_put = function (req, res) {
//  res.send('NOT IMPLEMENTED: donut update PUT' + req.params.id);
//};
// VIEWS
// Handle a show all view
exports.donut_view_all_Page = async function (req, res) {
    try {
        thedonuts = await donut.find();
        res.render('donut', { title: 'donut Search Results', results: thedonuts });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle donut create on POST.
exports.donut_create_post = async function (req, res) {
    console.log(req.body)
    let document = new donut();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"donut_type":"goat", "cost":12, "size":"large"}
    document.donut_name = req.body.donut_name;
    document.donut_type = req.body.donut_type;
    document.donut_size = req.body.donut_size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific donut.
exports.donut_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await donut.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle donut update form on PUT.
exports.donut_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await donut.findById(req.params.id)
        // Do updates of properties
        if (req.body.donut_name)
            toUpdate.donut_name = req.body.donut_name;
        if (req.body.donut_size) toUpdate.donut_size = req.body.donut_size;
        if (req.body.donut_type) toUpdate.donut_type = req.body.donut_type;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle donut delete on DELETE.
exports.donut_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await donut.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.donut_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await donut.findById(req.query.id)
        res.render('donutdetail',
            { title: 'donut Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a donut.
// No body, no in path parameter, no query.
// Does not need to be async
exports.donut_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('donutcreate', { title: 'donut Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a donut.
// query provides the id
exports.donut_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await donut.findById(req.query.id)
        res.render('donutupdate', { title: 'donut Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.donut_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await donut.findById(req.query.id)
        res.render('donutdelete', {
            title: 'donut Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};