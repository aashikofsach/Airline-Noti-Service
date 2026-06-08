const {Ticket} = require("../models/");
const CrudRepository = require("./crud-repository");

class TicketRepository extends CrudRepository{
    constructor()
    {
        super(Ticket)
    }
}

module.exports = TicketRepository ;