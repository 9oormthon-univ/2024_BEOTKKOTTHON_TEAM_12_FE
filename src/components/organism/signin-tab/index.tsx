import { SignInAgreement, SigninFirstForm, SigninSecondForm, TagInput } from 'components/index';
import { useSigninFormData, useSigninFormDataActions } from 'store/signInData';

interface SinginTabProps {
  activeIndex: number;
}

const SinginTab = ({ activeIndex }: SinginTabProps) => {
  const signinFormData = useSigninFormData();
  const { changeStyleTags, setIsDisabled } = useSigninFormDataActions();

  const handleChange = (newStyle: string[]) => {
    changeStyleTags(newStyle);
    setIsDisabled(false);
  };

  if (activeIndex === 0) return <SigninFirstForm />;

  if (activeIndex === 1) return <SigninSecondForm />;

  if (activeIndex === 2) {
    return <TagInput currentStyle={signinFormData.styleTags} handleChange={handleChange} />;
  }

  if (activeIndex === 3) return <SignInAgreement />;

  return null;
};

export default SinginTab;
