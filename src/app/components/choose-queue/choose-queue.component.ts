import { Component } from '@angular/core'
import { GameControlService } from 'src/app/game-control.service'
import { ChooseQueue } from 'src/app/models/ChooseQueue'
import { WindowService } from 'src/app/window.service'
import { ChooseQueueMenuComponent } from '../choose-queue-menu/choose-queue-menu.component'

@Component({
    selector: 'app-choose-queue',
    templateUrl: './choose-queue.component.html',
    styleUrls: ['./choose-queue.component.scss']
})
export class ChooseQueueComponent {

    constructor(private gameControlService: GameControlService, private windowSerivce: WindowService) {}

    public get chooseQueue(): ChooseQueue {
        return this.gameControlService.chooseQueue
    }

    public get queue(): string[] {
        return this.chooseQueue.getQueue()
    }

    public createWindow(): void {
        this.windowSerivce.createWindow(ChooseQueueMenuComponent, { closeable: true })
    }
}
