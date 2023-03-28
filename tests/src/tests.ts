import { SocketStatic} from '../../src/www/socket-definitions';

declare var Socket: SocketStatic;

exports.defineAutoTests = function () {

    describe('Socket', function () {

        it('should be defined', function () {
            expect(Socket).toBeDefined();
        })

    })
};

type CreateActionButtonFct = (title: string, runnable: () => void) => void;
exports.defineManualTests = function (contentEl: HTMLElement, createActionButton: CreateActionButtonFct) {
    // TODO
};