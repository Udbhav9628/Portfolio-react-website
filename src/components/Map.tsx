import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-15.0, -52.0, 15],
                center: [-8, -1],
                scale: 1600
            }}
        >
            <Geographies
                geography="/features.json"
                fill="#2C065D"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
};

export default Map;