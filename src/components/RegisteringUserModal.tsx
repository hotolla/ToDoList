import { Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { RegisterCreationForm } from './RegisterCreationForm';
import { useTranslation } from 'react-i18next';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const RegisteringUserModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle color="primary">
      {t('register.header')}
      
        <IconButton
          color="primary"
          edge="end"
          sx={{
            position: 'absolute',
            right: 26,
            top: 8
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <RegisterCreationForm onSubmited={onClose} />
    </Dialog>
  );
};
