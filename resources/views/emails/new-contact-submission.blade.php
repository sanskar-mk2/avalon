<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
    <title>New Contact Submission</title>
</head>

<body>
    <h1>Form Submission Details</h1>
    <p>Name: {{ $contact->name }}</p>
    <p>Email: {{ $contact->email }}</p>
    <p>Phone: {{ $contact->phone }}</p>
    <p>Interest: {{ $contact->interest }}</p>
    <p>Message: {{ $contact->message }}</p>
</body>

</html>
