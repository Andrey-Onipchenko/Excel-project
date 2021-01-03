import {capitelize} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw  new Error(`no root provided for DomListener`);
        }
        this.$root = $root
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            console.log(method)
            if (!this[method]) {
                throw  new Error(
                    `Method ${method} is not implemented in ${this.name} component`
                )
            }
            this.$root.on(listener, this[method].bind(this));
        })
    }

    removeDOMListeners() {
    }
}

function getMethodName(eventName) {
    return 'on' + capitelize(eventName)
}