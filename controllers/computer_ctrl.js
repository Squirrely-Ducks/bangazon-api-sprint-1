const Computer = require('../models/Computers');

module.exports.get_computers = ({ query: { active } }, res, next) => {
    const getComputers = active ? "get_active" : "get_all";
    Computer[getComputers]()
        .then((computers) => {
            res.status(200).json(computers);
        }).catch((err) => next(err));
}

module.exports.get_one_computer = (req, res, next) => {
    let id = req.params.id;
    Computer.get_one(id)
        .then((computer) => {
            if (computer) {
                res.status(200).json(computer);
            } else {
                let err = new Error(`404: Computer: ${id} not found`);
                next(err);
            }
        }).catch((err) => next(err));
}

module.exports.add_computer = (req, res, next) => {
    let now = new Date().toISOString();

    req.body.purchase_date = now;
    console.log(req.body, 'here');
    Computer.new_computer(req.body)
        .then((computer) => {
            res.status(200).json(computer);
        }).catch((err) => next(err));
}

module.exports.edit_computer = (req, res, next) => {
    let id = req.params.id;
    Computer.update_computer(id, Object.keys(req.body), Object.values(req.body))
        .then((computer) => {
            res.status(200).json(computer);
        }).catch((err) => next(err));
} 