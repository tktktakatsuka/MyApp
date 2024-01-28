import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingSpinnerService {
    /** スピナーの表示、非表示フラグ */
    public isLoading: Subject<boolean> = new Subject<boolean>();

    constructor() { }

    /**
     * スピナーの表示
     */
    public show(): void {
        this.isLoading.next(true);
    }

    /**
     * スピナーの非表示
     */
    public hide(): void {
        this.isLoading.next(false);
    }
} 