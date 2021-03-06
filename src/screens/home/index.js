import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button';
import { LineCharts } from '../../components/charts';
import { COLORS } from '../../constants/colors';
import { patiensData } from '../../mocks';
import { setIsLogin } from '../../reducers/loginSlice';
import { resetUser } from '../../reducers/userSlice';
import {
  ButtonContainer, ChartContainer, ContentContainer, Headline,
} from './home.styles';

function Home() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const tableLabels = patiensData.map((data) => data.date);

  const data = {
    labels: tableLabels,
    datasets: [
      {
        label: 'Patients 2022',
        data: patiensData.map((dataPatients) => Number(dataPatients.value)),
        borderColor: COLORS.purple,
        backgroundColor: COLORS.purple,
      },
    ],
  };

  const handleSignOut = () => {
    dispatch(resetUser);
    dispatch(setIsLogin(false));
  };

  return (
    <ContentContainer>
      <Headline>
        {user.username}
      </Headline>
      <ChartContainer>
        <LineCharts data={data} />
      </ChartContainer>

      <ButtonContainer>
        <Button title="Sign out" onClick={handleSignOut} />
      </ButtonContainer>
    </ContentContainer>
  );
}

export default Home;
