var donut = require('../models/donut'); 
 
// List of all donuts 
exports.donut_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: donut list'); 
}; 

// List of all Costumes 
exports.donut_list = async function(req, res) { 
    try{ 
        thedonuts = await donut.find(); 
        res.send(thedonuts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific donut. 
exports.donut_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: donut detail: ' + req.params.id); 
}; 
// List of all Costumes 
exports.donut_detail = async function(req, res) { 
    try{ 
        thedonuts = await donut.find(); 
        res.send(thedonuts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Donut create on POST. 
exports.donut_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: donut create POST'); 
}; 


// List of all Costumes 
exports.donut_create_post = async function(req, res) { 
    try{ 
        thedonuts = await donut.find(); 
        res.send(thedonuts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Donut delete form on DELETE. 
exports.donut_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: donut delete DELETE ' + req.params.id); 
}; 
// List of all Costumes 
exports.donut_delete = async function(req, res) { 
    try{ 
        thedonuts = await donut.find(); 
        res.send(thedonuts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Donut update form on PUT. 
exports.donut_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: donut update PUT' + req.params.id); 
}; 
// List of all Costumes 
exports.donut_update_put = async function(req, res) { 
    try{ 
        thedonuts = await donut.find(); 
        res.send(thedonuts); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.donut_view_all_Page = async function(req, res) { 
    try{ 
        thedonuts = await donut.find(); 
        res.render('donuts', { title: 'donut Search Results', results: thedonuts }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle Costume create on POST. 
exports.donut_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new donut(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.donut_name = req.body.donut_name; 
    document.donut_size = req.body.donut_size; 
    document.donut_type = req.body.donut_type; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
