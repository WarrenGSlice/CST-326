const db = require('../models');
const Menu = db.menu;

module.exports = function(app){
    app.get('/api/menu', async (req, res) => {
        try {
            const menus = await Menu.findAll();
            res.json(menus);
        } catch (error) {
            console.log('Error reading menu items error = ', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })
}