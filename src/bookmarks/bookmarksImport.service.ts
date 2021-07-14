import { Injectable } from '@nestjs/common';
import { ConsoleService } from 'nestjs-console';

@Injectable()
export class BookmarksImportService {
    constructor(private readonly consoleService: ConsoleService) {
        // get the root cli
        const cli = this.consoleService.getCli();

        // create a single command (See [npm commander arguments/options for more details])
        this.consoleService.createCommand(
            {
                command: 'read <file>',
                description: 'Read firefox format'
            },
            this.readFile,
            cli // attach the command to the cli
        );
    }

    readFile = async (file: string): Promise<void> => {
        console.log(`Listing files in directory ${file}`);
        // your code...
    };
}