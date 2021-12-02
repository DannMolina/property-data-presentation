import React, {useEffect, useState} from 'react';
import Select from 'react-select';

// * component
import ChartComponent from '../components/Chart';
import LoaderComponent from '../components/Loader';

// * services
import {getProperties, getProperty} from '../services/property';

const Dashboard = () => {
    // * local states
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(false);

    // * get properties to populate dropdown
    const _getProperties = async () => {
        const data = await getProperties();

        let _properties = [];
        data.properties.map((item) => {
            _properties.push({
                value: {item},
                label: item.propertyName,
            });
        });
        setProperties(_properties);

        // * populate data for chart initial render
        const property = await getProperty(data.properties[0].propertyId);
        setProperty(property.property[0]);
    };

    useEffect(() => {
        _getProperties();
    }, []);

    // * retrieve and return the rentalIncome data for the corresponding property.
    const _getProperty = async () => {
        const data = await getProperty(selectedProperty.value.item.propertyId);

        setProperty(data.property[0]);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    useEffect(() => {
        if (selectedProperty) {
            setLoading(true);
            _getProperty();
        }
    }, [selectedProperty]);

    if (loading) {
        return <LoaderComponent />;
    }

    return (
        <div className="dashboard-container">
            <div
                style={{
                    width: '30%',
                    margin: 'auto',
                }}>
                <p>Select A Property:</p>
                <Select options={properties} onChange={setSelectedProperty} />
            </div>

            <div style={{marginTop: '1em'}}>
                {property ? <ChartComponent property={property} /> : null}
            </div>
        </div>
    );
};

export default Dashboard;
