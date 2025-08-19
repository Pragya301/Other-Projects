import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


    const ExpressionForm = () => {
    const [rules, setRules] = useState([
        { key: 'age', output: { value: '', operator: '>=', score: '' } },
    ]);

    const [combinator, setCombinator] = useState('and');

    const handleInputChange = (index, field, value) => {
        const newRules = [...rules];
        newRules[index].output[field] = value;
        setRules(newRules);
    };

    const handleAddExpression = () => {
        setRules([...rules, { key: 'age', output: { value: '', operator: '>=', score: '' } }]);
    };

    const handleDeleteExpression = (index) => {
        const newRules = [...rules];
        newRules.splice(index, 1);
        setRules(newRules);
    };

    return (
        <Container className='mt-5'>
            <strong className='h2'>Expression Form</strong>
        <Form className='mt-3'>
            {rules.map((rule, index) => (
            <Row key={index} className="mb-3">
                <Col>
                <Form.Group controlId={`ruleType-${index}`}>
                    <Form.Label>Rule Type</Form.Label>
                    <Form.Control
                    as="select"
                    value={rule.key}
                    onChange={(e) => handleInputChange(index, 'key', e.target.value)}
                    >
                    <option value="age">Age</option>
                    <option value="credit_score">Credit Score</option>
                    <option value="account_balance">Account Balance</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId={`operator-${index}`}>
                    <Form.Label>Operator</Form.Label>
                    <Form.Control
                    as="select"
                    value={rule.output.operator}
                    onChange={(e) => handleInputChange(index, 'operator', e.target.value)}
                    >
                    <option value=">">{'>'}</option>
                    <option value="<">{'<'}</option>
                    <option value=">=">{'>='}</option>
                    <option value="<=">{'<='}</option>
                    <option value="=">{'='}</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId={`value-${index}`}>
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                    type="text"
                    value={rule.output.value}
                    onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId={`score-${index}`}>
                    <Form.Label>Score</Form.Label>
                    <Form.Control
                    type="text"
                    value={rule.output.score}
                    onChange={(e) => handleInputChange(index, 'score', e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col className="align-self-end">
                <Button variant="danger" onClick={() => handleDeleteExpression(index)}>
                    Delete
                </Button>
                </Col>
            </Row>
            ))}

            <Form.Group controlId="combinator">
            <Form.Label>Combinator</Form.Label>
            <Form.Control
                as="select"
                value={combinator}
                onChange={(e) => setCombinator(e.target.value)}
            >
                <option value="and">AND</option>
                <option value="or">OR</option>
            </Form.Control>
            </Form.Group>

            <Button className='mt-3' variant="primary" onClick={handleAddExpression}>
            Add Expression
            </Button>

        </Form>
        </Container>
    );
    };

    export default ExpressionForm;
