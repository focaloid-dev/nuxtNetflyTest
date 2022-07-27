import axios from 'axios'
let base_url = 'http://localhost:8001'

const containersSchemaValidator = require('../consume/validate-cjs')

function validate_data(datas) {
    const valid = containersSchemaValidator(datas)
    if (!valid) console.log(validate.errors)
    else
        return true

}
export const fetchContainers = async () => {
    return axios.get(base_url + '/charts/top-containers', {

    }).then(function (response) {
        return response.data?.data ?? [];
    });
}

export const fetchContainersJson = async () => {
    try {
        const response = await fetch("https://badge-bucket2.s3.ap-south-1.amazonaws.com/slim_container_insights.json");
        const { data } = await response.json();
        const validated_data = []
        for (let i = 0; i < data.length; i++) {
            if (validate_data(data[i])) {
                validated_data.push(data[i])
            }
        }
        return validated_data;
    } catch (error) {
        console.log(error);
    }
}
