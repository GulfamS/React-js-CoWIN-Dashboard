import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div className="by-age-container">
      <h1 className="vaccine-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="63%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="40-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
