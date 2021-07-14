import { BootstrapConsole } from 'nestjs-console';
import { UsersModule } from './users.module';

const bootstrap = new BootstrapConsole({
 module: UsersModule,
    useDecorators: true
});
bootstrap.init().then(async (app) => {
    try {
        await app.init();
        await bootstrap.boot();
        await app.close();
    } catch (e) {
        console.error(e);
        await app.close();
        process.exit(1);
    }
});