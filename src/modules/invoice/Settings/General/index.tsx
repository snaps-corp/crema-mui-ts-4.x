import AppGridContainer from '@crema/components/AppGridContainer';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { InvoiceSettingItem } from '@crema/types/models/invoice';

type Props = {
  settings: { [key: string]: string };
  onUpdateSettings: (key: string, newSettings: InvoiceSettingItem) => void;
};

const General = ({ settings, onUpdateSettings }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Formik
      validateOnChange={true}
      initialValues={settings}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        onUpdateSettings('general', data);

        setIsEdit(false);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form noValidate autoComplete='off'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='h4'>General Settings</Typography>
            <Typography variant='body1' sx={{ mt: 2, color: 'text.secondary' }}>
              Manage your general account settings
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
              <Typography variant='h5'>Account Info</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Update your account details.
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
                    name='accountType'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Account type'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='agencyName'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Agency Name'
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
              <Typography variant='h5'>System</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Update your system information.
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
                    name='language'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Language'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='dateFormat'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Date Format'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='currency'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Default Currency'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='decimalSeparator'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Decimal Separator'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
              </AppGridContainer>
            </Box>
          </Grid>
        </AppGridContainer>
        <AppGridContainer sx={{ my: 1 }}>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant='h5'>Address</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Update your address details.
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
                <Grid item xs={12}>
                  <AppTextField
                    name='street'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Street/Number'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='zipCode'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Zip Code'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='city'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='City'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='state'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='State'
                    InputProps={{
                      readOnly: !isEdit,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='country'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Country'
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
              <Typography variant='h5'>Contact info</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Update your contact details.
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
                    name='phoneNumber'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Phone Number'
                    readOnly={!isEdit}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='alternateNumber'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Alternate Number'
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

export default General;
