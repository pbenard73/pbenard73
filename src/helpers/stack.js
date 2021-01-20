const map = {
    node: 'node.png',
    react: 'react.png',
    docker: 'docker.png',
    express: 'express.png',
    jquery: 'jquery.png',
    less: 'less.png',
    sass: 'sass.png' ,
    filemaker: 'filemaker.png',
    pg: 'pg.png',
    symfony: 'symfony.png',
    mysql: 'mysql.png',
    sqlite: 'sqlite.png',
    phpstorm: 'phpstorm.png',
    redis: 'redis.png',
    socket: 'socket.png',
    vim: 'vim.png',
}

const getTechno = techno => (map[techno] || null)

export default getTechno
