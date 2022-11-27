import Theories from "../models/theory";

export async function syncDatabase(){
    //Options, sometimes, the connections with database break, and we need to change force: TRUE, and then unchanged.
    //See it: https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-sync 
    const syncOptions = {force: false, alter: true};

    //Model and Database synchronization
    await Theories.sync(syncOptions);
}