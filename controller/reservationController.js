const jogjawheelsReservation = require("../reservation/jogjawheelsReservation");

//POST - CREATED METHOD//
async function createReservation(req, res){
    try {
        const reservation = await jogjawheelsReservation.createReservation(req.body);
        res.status(201).json({
            message: "succes Create Reservation",
            data: reservation
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }

}

//GET METHOD//
async function getReservation(req, res){
    try {
        const reservation = await jogjawheelsReservation.getReservation()
        res.status(200).json({
            message: "Succes Reservation",
            data: reservation
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

//GET RESERVATION BY ID//
async function getReservationById(req, res){
    const { reservationId } = req.params;
    try {
        const reservation = await jogjawheelsReservation.getReservationById(reservationId);
        if (!reservation){
            res.status(404).json({
                message: "Reservation Jogjawheels Not Found"
            });
        }
        res.status(200).json({
            message: "Succes GET Reservation Jogjawheels",
            data: reservation
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })       
    }
}

//PATH UPDARE RESERVATION//
async function updateReservation(req, res){
    const { reservationId } = req.params;
    const { body } = req;
    try {
        await jogjawheelsReservation.updateReservation(body, reservationId);
        res.status(200).json({
            message : "Update Success"
        })
    } catch (error) {
        res.status(500).json({
           message: "Update Error" 
        })
    }
}

//DELETED METHOD//
async function deleteReservation(req, res){
    const { reservationId } = req/params;
    try {
        await jogjawheelsReservation.deleteReservation(reservationId);
        res.status(200).json({
            message: "Delete Success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Delete Error"
        })
    }
}

module.exports = {
    createReservation,
    getReservation,
    getReservationById,
    updateReservation,
    deleteReservation 
}