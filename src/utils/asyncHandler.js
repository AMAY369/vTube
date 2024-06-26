const asyncHandler = (requestHandler)=> {
  (error, req, res, next)=> {
    Promise.resolve(requestHandler(error, req, res, next)).catch((error)=> next(error));
  }
}




// const asyncHandler = (fun)=> async(error,req,res,next)=> {
//   try {
//     await fun(error, req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message
//     });
//   }
// }

export default asyncHandler;