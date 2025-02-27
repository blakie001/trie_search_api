import redis from "redis";


const client = redis.createClient({
    host: 'localhost',
    port: 6379,  
})

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (error) => {
    console.error('Error Connecting Redis:', error);
});

client.connect();

export default client;