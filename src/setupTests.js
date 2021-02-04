import Enzyme from "enzyme"
import EnzymeAdapter from "enzyme-adpater-react-16"

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})