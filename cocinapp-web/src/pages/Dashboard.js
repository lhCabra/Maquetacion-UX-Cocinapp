import '../App.css';
import BarChart from '../components/BarChart';
import DashboardStat from '../components/DashboardStat';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';

function Dashboard() {
  const data = {
    labels: ['2-8 sep', '9-15 sep', '16-22 sep', '23-29 sep'],
    values: [10, 5, 15, 18],
  };
  const data2 = {
    labels: ['Salchichas', 'Bandeja paisa', 'Huevo tibio'],
    values: [2, 1, 4],
  };

  return (
    <div className='dashboard'>
      <Navbar title="Estadísticas" />
      <div className="row-filter">
       <Filter></Filter>
      </div>
      <div className="row">
        <DashboardStat title={12} description="recetas creadas"></DashboardStat>
        <DashboardStat title={45} description="alarmas configuradas"></DashboardStat>
        <DashboardStat title={35} description="horas cocinando"></DashboardStat>
        <DashboardStat title={1.5} description="horas promedio por receta"></DashboardStat>
      </div>
      <div className="row-charts">
        <div className="card-chart">
          <span className="chart-title">Tiempo cocinando</span>
          <BarChart data={data} maxYValue={20} />
        </div>
        <div className="card-chart">
          <span className="chart-title"># de preparaciones por receta</span>
          <BarChart data={data2} maxYValue={4} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
