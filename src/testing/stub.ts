import { Component } from '@angular/core';

export class Stub {
    static Component(options: Component): object {
        const metadata: Component = {
            selector: options.selector,
            template: options.template || '',
            inputs: options.inputs,
            outputs: options.outputs
        };
        return Component(metadata)(class StubbedClass { });
    }
}
