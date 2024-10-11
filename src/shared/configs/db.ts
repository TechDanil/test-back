import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('BanGzIsx', 'pMXtsG', 'efsgHDVxKhlwUZnR', {
    host: '81.31.247.100',
    port: 3306,
    dialect: 'mysql',
});
export default sequelize;
