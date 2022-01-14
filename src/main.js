import SamplePWA from "./components/SamplePWA";
import {$qs, DOM} from "./utils";
import Header from "./components/Header";


function runSampleApp() {
    const header = new Header({
        target: $qs("header")
    });

    const samplePWA = new SamplePWA({
        target: $qs(".content")
    });
}

runSampleApp();