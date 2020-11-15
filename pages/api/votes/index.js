import dbConnect from '../../../utils/dbConnect'
import Vote from '../../../models/Vote'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect();

    switch (method) {
        // case 'GET':
        //     try {
        //         const players = await Player.find({}) // Find all the players in the database
        //         res.status(200).json({
        //             success: true,
        //             data: players
        //         });
        //     } catch (error) {
        //         res.status(400).json({
        //             success: false,
        //         })
        //     }
        //     break;
        case 'POST':
            console.log('Posting');
            try {
                // var query = {'name' : req.body.name}
                const player = await Vote.create(
                    req.body
                ) // create a new model
                res.status(201).json({
                    success: true,
                    data: player,
                });
            } catch (error) {
                console.log(error);
                res.status(400).json({
                    success: false,
                });
            }
            break;
        default:
            res.status(400).json({
                success: false,
            });
            break;
    }
}