import React, { useState } from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import { InvoiceSettingItem } from '@crema/types/models/invoice';

type Props = {
  settings: { [key: string]: string };
  onUpdateSettings: (key: string, newSettings: InvoiceSettingItem) => void;
};

const Accounting = ({ settings, onUpdateSettings }: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [swiftBic, setSwiftBic] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowSwift = () => setSwiftBic((show) => !show);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <Formik
      validateOnChange={true}
      initialValues={settings}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        onUpdateSettings('accounting', data);

        setIsEdit(false);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form noValidate autoComplete='off'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='h4'>Accounting Settings</Typography>
            <Typography variant='body1' sx={{ mt: 2, color: 'text.secondary' }}>
              Manage your accounting settings
            </Typography>
          </Box>
          <Box>
            {!isEdit && (
              <EditIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => setIsEdit(true)}
              />
            )}
          </Box>
        </Box>
        <Divider sx={{ my: 4 }} />
        <AppGridContainer>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant='h5'>Bank Details</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                View/Edit your bank details.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                border: '1px solid #EAECF0',
                p: 6,
                borderRadius: 3,
                boxShadow:
                  '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
              }}
            >
              <AppGridContainer>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='accountHolder'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Account holder'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='bankName'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Bank Name'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='countryOfBank'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Country of bank'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='accountNumber'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    type={showPassword ? 'text' : 'password'}
                    label='Account Number'
                    InputProps={{
                      readOnly: !isEdit,
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='swiftBic'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    type={swiftBic ? 'text' : 'password'}
                    label='Account Number'
                    InputProps={{
                      readOnly: !isEdit,
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowSwift}
                            edge='end'
                          >
                            {swiftBic ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='ifsc'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='IFSC'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
              </AppGridContainer>
            </Box>
          </Grid>
        </AppGridContainer>
        <Divider sx={{ my: 4 }} />
        <AppGridContainer>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant='h5'>Taxes</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Update your tax rates.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                border: '1px solid #EAECF0',
                p: 6,
                borderRadius: 3,
                boxShadow:
                  '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
              }}
            >
              <AppGridContainer>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='taxId'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Tax ID'
                    readOnly={!isEdit}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='vatId'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='VAT ID'
                    readOnly={!isEdit}
                  />
                </Grid>
              </AppGridContainer>
            </Box>
          </Grid>
        </AppGridContainer>
        {isEdit && (
          <Stack
            direction='row'
            justifyContent='flex-end'
            spacing={5}
            sx={{ mt: 3 }}
          >
            <Button
              sx={{ color: 'text.secondary' }}
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save
            </Button>
          </Stack>
        )}
      </Form>
    </Formik>
  );
};
export default Accounting;
