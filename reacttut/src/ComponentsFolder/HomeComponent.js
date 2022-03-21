import { BodyComponent } from "../BodyContent/BodyComponent"
import { ButtonTestComponent } from "./ComponentsLearnTest/ButtonTestComponent"
import { HeaderDisplay } from "./ComponentsLearnTest/HeaderDisplay"

export const HomeComponent = () => {
    return(
        <>
            <BodyComponent/>
            <HeaderDisplay title='Hello world'/>
            <ButtonTestComponent/>
        </>
    )
}