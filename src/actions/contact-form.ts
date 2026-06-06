'use server'

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      throw new Error('WEB3FORMS_ACCESS_KEY is missing')
    }

    const data = new FormData()

    data.append('access_key', accessKey)
    data.append('name', String(formData.get('name') || ''))
    data.append('email', String(formData.get('email') || ''))
    data.append('subject', String(formData.get('subject') || ''))
    data.append('message', String(formData.get('message') || ''))

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    })

    console.log('Access Key:', accessKey)
    console.log('Name:', formData.get('name'))
    console.log('Email:', formData.get('email'))
    console.log('Subject:', formData.get('subject'))
    console.log('Message:', formData.get('message'))

    const result = await response.json()
    console.log('Web3Forms Response:', result)

    if (result.success) {
      return {
        success: true,
        message: 'Message sent successfully.',
      }
    }

    return {
      success: false,
      message: result.message || 'Failed to send message.',
    }
  } catch (error) {
    console.error('WEB3FORMS ERROR:', error)

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong.',
    }
  }
}

export default action
