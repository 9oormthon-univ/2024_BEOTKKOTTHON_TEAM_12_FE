import { SignInAgreement, SigninFirstForm, SigninSecondForm, TagInput } from 'components/index';
import { useSigninFormData, useSigninFormDataActions } from 'store/signInData';

interface SinginTabProps {
  activeIndex: number;
}

const SinginTab = ({ activeIndex }: SinginTabProps) => {
  const signinFormData = useSigninFormData();
  const { changeStyleTags } = useSigninFormDataActions();

  if (activeIndex === 0) return <SigninFirstForm />;

  if (activeIndex === 1) return <SigninSecondForm />;

  if (activeIndex === 2) {
    return (
      <TagInput
        currentStyle={signinFormData.styleTags}
        handleChange={changeStyleTags}
        label="스타일 태그 선택"
      />
    );
  }

  if (activeIndex === 3) return <SignInAgreement />;

  return null;
};

export default SinginTab;
