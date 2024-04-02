import React, { useEffect, useState } from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';
import { useDropzone } from 'react-dropzone';
import { InvoiceSettingItem } from '@crema/types/models/invoice';

type Props = {
  settings: { [key: string]: string };
  onUpdateSettings: (key: string, newSettings: InvoiceSettingItem) => void;
};

type UploadType = {
  preview: string;
};

const Invoicing = ({ settings, onUpdateSettings }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadType[]>([]);

  const dropzone = useDropzone({
    accept: {
      'image/png': ['.png', '.jpeg', '.jpg'],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  useEffect(() => {
    setUploadedFiles([{ preview: settings.logo }]);
  }, [settings]);

  return (
    <Formik
      validateOnChange={true}
      initialValues={settings}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        onUpdateSettings('invoicing', {
          ...data,
          logo: uploadedFiles[0]?.preview,
        });

        setIsEdit(false);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form noValidate autoComplete='off'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='h4'>Invoicing Settings</Typography>
            <Typography variant='body1' sx={{ mt: 2, color: 'text.secondary' }}>
              Manage your invoicing settings
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
              <Typography variant='h5'>General Info</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                View/Edit your general invoicing settings.
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
        <Divider sx={{ my: 4 }} />
        <AppGridContainer sx={{ my: 1 }}>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant='h5'>Logo</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Set a logo
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
              {isEdit ? (
                <Box
                  sx={{ cursor: 'pointer', width: 'fit-content' }}
                  {...dropzone.getRootProps({ className: 'dropzone' })}
                >
                  <input {...dropzone.getInputProps()} />
                  <img
                    src={uploadedFiles?.[0]?.preview || settings.logo}
                    alt='logo'
                    style={{ width: 40, height: 'auto' }}
                  />
                </Box>
              ) : (
                <img
                  src={uploadedFiles?.[0]?.preview || settings.logo}
                  alt='logo'
                  style={{ width: 40, height: 'auto' }}
                />
              )}
            </Box>
          </Grid>
        </AppGridContainer>
        <Divider sx={{ my: 4 }} />
        <AppGridContainer>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant='h5'>Invoice Recipient</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Set your invoicing recipient
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
                    name='clientName'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Client & Recipient Name'
                    readOnly={!isEdit}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    type='email'
                    name='email'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Email'
                    readOnly={!isEdit}
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
              <Typography variant='h5'>Additional Text</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Set introduction text.
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
                    name='introductionText'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Introduction Text'
                    readOnly={!isEdit}
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
              <Typography variant='h5'>Tax Rates</Typography>
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
                    name='taxType'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Tax Type'
                    readOnly={!isEdit}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='taxValue'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Tax Value'
                    readOnly={!isEdit}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    name='concludingText'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Concluding Text'
                    readOnly={!isEdit}
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
              <Typography variant='h5'>Payment Deadline</Typography>
              <Typography
                variant='body1'
                sx={{ mt: 1, color: 'text.secondary' }}
              >
                Set your payment deadline
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
                    name='paymentDeadline'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      my: 2,
                    }}
                    label='Payment Deadline'
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

export default Invoicing;
