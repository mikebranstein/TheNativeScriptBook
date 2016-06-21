declare module "ui/transition" {
    import frame = require("ui/frame");

    export module AndroidTransitionType {
        export var enter: string;
        export var exit: string;
        export var popEnter: string;
        export var popExit: string;
    }

    export class Transition {
        constructor(duration: number, nativeCurve: any);
        public getDuration(): number;
        public getCurve(): any;
        public animateIOSTransition(containerView: any, fromView: any, toView: any, operation: any, completion: (finished: boolean) => void): void;
        public createAndroidAnimator(transitionType: string): any;
        public toString(): string;
    }

    
}