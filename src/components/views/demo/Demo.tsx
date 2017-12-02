import * as React from 'react'
import * as styles from './demo.scss'

// Components:
import {Grid, Row, Col} from 'react-flexbox-grid'
import { Button } from 'components/ui'

interface IDemoProps extends Types.RouteComponentProps<IDemoProps> {

}

class Demo extends React.Component<IDemoProps, {}> {
    render() {
        return (
            <div className={styles['view-demo']}>
                <h2>Grid system: </h2>
                <h3>Using Flexbox grid</h3>
                <div className={styles['show-case']}>
                    <Row>
                        <Col xs={2}>
                            <div className={styles['blue-block']}></div>
                        </Col>

                        <Col xs={2}>
                            <div className={styles['blue-block']}></div>
                        </Col>

                        <Col xs={2}>
                            <div className={styles['blue-block']}></div>
                        </Col>

                        <Col xs={2}>
                            <div className={styles['blue-block']}></div>
                        </Col>

                        <Col xs={2}>
                            <div className={styles['blue-block']}></div>
                        </Col>

                        <Col xs={2}>
                            <div className={styles['blue-block']}></div>
                        </Col>
                    </Row>
                </div>

                <h2>Buttons:</h2>
                <div className={styles['show-case']}>
                    <Button>I am a button</Button>
                </div>

            </div>
        )
    }
}

export default Demo