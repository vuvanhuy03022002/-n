import {UserModel} from '../models/UserModel.js'
import {generateToken} from '../untils/until.js'
import expressAsyncHandler from 'express-async-handler'

export const getAllUser = (req, res) => {
    UserModel.find({})
        .then(user => res.send(user))
        .catch(err => console.log(err))
}

export const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
        res.status(400).send({ message: 'Email đã tồn tại' });
        return;
    }

    const user = new UserModel({
        name,
        email,
        password,
        address: '',
        phone: '',
        isAdmin: false,
    });

    const createdUser = await user.save();
    
    res.status(201).send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        password: createdUser.password,
        address: createdUser.address,
        phone: createdUser.phone,
        token: generateToken(createdUser),
    });
});


export const login = expressAsyncHandler(async (req, res) => {
    const user = await  UserModel.findOne({email: req.body.email, password: req.body.password})
    if(user){ 
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address ,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        });
    }else{
        res.status(401).send({message: "invalid email or password"})
    }
})

export const DeleteUser = expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findById({_id: req.params.id})

    if(user){
        await user.remove()
        res.send({message: 'user deleted'})
    }else{
        res.send({message: 'user not exists'})
    }
})



  export const createUser = expressAsyncHandler(async (req, res) => {
    try {
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address || '',
            phone: req.body.phone || '',
            isAdmin: req.body.isAdmin || false,
        });
        
        const createdUser = await user.save();

        if (createdUser) {
            res.status(201).send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                password: createdUser.password,
                address: createdUser.address,
                phone: createdUser.phone,
                isAdmin: createdUser.isAdmin,
                token: generateToken(createdUser),
            });
        } else {
            res.status(500).send({ message: 'Failed to create user' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error creating user' });
    }
});

export const updateUser = expressAsyncHandler(async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.password = req.body.password || user.password;
            user.address = req.body.address || user.address;
            user.phone = req.body.phone || user.phone;
            user.isAdmin = req.body.isAdmin || user.isAdmin;

            const updatedUser = await user.save();

            res.send({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                password: updatedUser.password,
                address: updatedUser.address,
                phone: updatedUser.phone,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser),
            });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error updating user' });
    }
});


export const getUserById = expressAsyncHandler(async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId);

        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error getting user' });
    }
});
