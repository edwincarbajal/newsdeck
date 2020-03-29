import React, {
    Component
} from 'react'
import './Form.css';
import Recommendation from '../recommendation/Recommendation'

export default class Form extends Component {
    render() {
        return (
            <div className="FormContainer">
                <div className="InnerFormContainer">
                    <Recommendation />
                </div>
            </div>
        )
    }
}